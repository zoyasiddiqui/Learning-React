
function Footer() {
    return(
        <footer>
            {/* &copy; is the copyright symbol */}
            {/* The stuff within the curly braces is javascript */}
            <p>&copy; {new Date().getFullYear()} Zoya's Website</p>
        </footer>
    );
}

export default Footer