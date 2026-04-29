const footer = `
 <img src="../assets/logo.webp" alt="logo" class="footer_img">
        <div class="footer_column">
            <h3 class="footer_title">View Pages</h3>
            <ul class="footer_items">
                <li>Home</li>
                <li>News & Events</li>
                <li>Blogs</li>
                <li>About</li>
            </ul>
        </div>
        <div class="footer_column">
            <h3 class="footer_title">Social Media</h3>
            <ul class="footer_items">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Threads</li>
                <li>Youtube</li>
            </ul>
        </div>
        <div class="footer_column">
            <h3 class="footer_title">Contact Us</h3>
            <ul class="footer_items">
                <li>Support</li>
                <li>Nasa Site</li>
            </ul>
        </div>
`;

function loadFooter(){
    const container = document.getElementById("footer");
    container.innerHTML = footer;
}