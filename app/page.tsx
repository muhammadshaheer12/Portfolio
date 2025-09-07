import Image from "next/image"; 

export default function Home() {
  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <Image
              src="/images/shaheer.png" 
              alt="Muhammad Shaheer Portfolio"
              className="shadow-dark"
              width={500}  
              height={500} 
              priority={true} 
            />
            <h1>Muhammad Shaheer</h1>
            <p>Web Developer</p>
            <div className="social-links">
              <a href="https://github.com/muhammadshaheer12" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-shaheer12/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
