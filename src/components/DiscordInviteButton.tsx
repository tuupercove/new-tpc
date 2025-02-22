// src/components/DiscordInviteButton.tsx
import React from 'react';
import toast from 'react-hot-toast';

// Define props interface
interface DiscordInviteButtonProps {
  inviteUrl: string;
}

const DiscordInviteButton: React.FC<DiscordInviteButtonProps> = ({ inviteUrl }) => {
  const handleInvite = () => {
    const loadingToast = toast.loading('Opening Discord invite...');

    const inviteWindow = window.open(inviteUrl, '_blank');

    if (!inviteWindow) {
      toast.dismiss(loadingToast);
      toast.error('Please allow popups to join Discord');
      return;
    }

    const checkWindow = setInterval(() => {
      if (inviteWindow.closed) {
        clearInterval(checkWindow);
        toast.dismiss(loadingToast);
        toast('Operation cancelled by user', {
          icon: '❌',
          duration: 3000,
        });
      }
    }, 500);

    setTimeout(() => {
      clearInterval(checkWindow);
      if (!inviteWindow.closed) {
        toast.dismiss(loadingToast);
        toast('Taking too long - please try again', {
          icon: '⚠️',
          duration: 3000,
        });
      }
    }, 300000);
  };

  return (
    <>
      <button 
        onClick={handleInvite}
        className="btn"
      >
        Join Discord
      </button>
    </>
  );
};

export default DiscordInviteButton;