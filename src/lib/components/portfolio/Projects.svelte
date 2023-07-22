<div id="projects">
    <h2>Personal Projects</h2>
    
    <div class="project-entry">
        <h3>Express.JS</h3>
        <p>
            <a href="https://github.com/rileycalhoun/RTC">Real Time Chat with Socket.IO</a>,
            <a href="https://github.com/rileycalhoun/usersystem">Secure User System with Mongoose</a>,
            <a href="https://github.com/unvent-productions/web-server">Streamlined Express.JS Wrapper</a>
        </p>
    </div>
    
    <div class="project-entry">
        <h3>Spigot</h3>
        <p>
            <a href="https://github.com/rileycalhoun/PerWorldChat">Per World Chat</a>,
            <a href="https://github.com/rileycalhoun/NametagLives">Nametag Lives</a>
        </p>
    </div>
    
    <div class="project-entry">
        <h3>Discord</h3>
        <p>
            <a href="https://github.com/rileycalhoun/MusicBot">Kotlin Music Bot</a>,
            <a href="https://github.com/rileycalhoun/DiscordRichPresence">Discord Rich Presence</a>
        </p>
    </div>
</div>

<style>
    #projects {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding: 2rem;
        background-color: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        max-width: 500px;
        margin: 1rem auto;
    }

    .project-entry {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    #projects h2 {
        color: #2c2c2c;
        font-size: 26px;
        font-weight: 600;
        margin-bottom: 1rem;
        border-bottom: 1px solid #d0d0d0;
        padding-bottom: 0.5rem;
    }

    #projects h3 {
        color: #444;
        font-size: 20px;
        font-weight: 550;
        margin-bottom: 0.5rem;
    }

    #projects p {
        color: #666;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.4;
        margin: 0;
    }

    #projects a {
        text-decoration: none;
        color: #0077cc;
        border-bottom: 1px solid #0077cc;
        transition: color 0.3s ease;
    }

    #projects a:hover {
        color: #0055a5;
    }
</style>