import '../styles/Topbar.css';

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-track">
        <span>🚚 Free shipping on all orders over $200</span>
        <span>🚚 Free shipping on all orders over $200</span> {/* duplicate for smooth loop */}
      </div>
    </div>
  );
}

export default Topbar;
