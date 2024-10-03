const Navbar = () => {

    let isLogin = localStorage.getItem('isLogin') === 'true';  
    let username = localStorage.getItem('username');

    return `
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3">
        <div class="container">
            <a class="navbar-brand" href="#">JAVASCRIPT</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/pages/add.html">Add Product</a>
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

const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("isLogin");

    window.location.href = "/pages/login.html";
};


document.addEventListener("DOMContentLoaded", () => {
    const authLink = document.getElementById("authLink");
    if (authLink && localStorage.getItem('isLogin') === 'true') {
        authLink.addEventListener("click", handleLogout);
    }
});

export default Navbar;