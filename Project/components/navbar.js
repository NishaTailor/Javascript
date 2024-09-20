const Navbar = () => {

  let isLogin = localStorage.getItem('isLogin') === 'true';  // Check if user is logged in
  let username = localStorage.getItem('username');

  // Return navbar HTML with login/logout logic
  return `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="/index.html"><img src="/images/logo/Ologo.png"alt=""><img src="/images/logo/dharmik.png" alt=""></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pages/product.html">Product</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pages/addProduct.html">Add Product</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pages/cart.html">Cart</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${isLogin ? "#" : "/pages/login.html"}" id="authLink">${isLogin ? "Logout" : "Login"}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pages/signup.html">${isLogin ? username : "Signup"}</a>
            </li>
          </ul>
          <form class="d-flex" role="search" id="searching">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search" />
            <button class="btn text-white" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  `;
};

// Handle logout logic
const handleLogout = () => {
  // Clear login data from localStorage
  localStorage.removeItem("username");
  localStorage.removeItem("isLogin");

  // Redirect to login page
  window.location.href = "/pages/login.html";
};

// Add event listener for Logout button
document.addEventListener("DOMContentLoaded", () => {
  const authLink = document.getElementById("authLink");
  if (authLink && localStorage.getItem('isLogin') === 'true') {
    authLink.addEventListener("click", handleLogout);
  }
});

export default Navbar;
