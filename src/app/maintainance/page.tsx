import './style.css'

export default function Maintainance() {
  return (
    <div id="page-wrap">
        <div className="container">
            <h1>Maintenance Mode</h1>
            <p>We are currently performing maintenance on the site. Please check back later.</p>
        </div>
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} .prepare inc, All right (not)served</p>
        </footer>
    </div>
  );
}