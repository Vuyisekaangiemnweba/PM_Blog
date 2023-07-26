<html lang="en">

    <header>
        <h1>Junior Project Management Journey</h1>
    </header>
    <main id="blog-posts">
        
    </main>
    <footer>
        <p>&copy; 2023 V.Mnweba. All rights reserved.</p>
    </footer>

    <script>
       {
            const blogPosts = document.getElementById("blog-posts");

            const article = document.createElement("article");
            article.innerHTML = `
                <h2>${title}</h2>
                <p>${content}</p>
            `;

            blogPosts.appendChild(article);
        
        }

<script>
        {
            // Prevent default link behavior (page reload)
            event.preventDefault();

            // Get the target section id from the href attribute
            const targetId = event.target.getAttribute("href");

            // Scroll to the target section smoothly
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        }

       
            link.addEventListener("click", handleNavClick);  

    
    </script>