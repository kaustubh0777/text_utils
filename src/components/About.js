

export default function About(props) {
  return (
    <div
      className="container"
      style={{
        backgroundColor: props.mode === "light" ? "white" : "#17104e",
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <h1 className="my-2 text-center mb-4">About Us</h1>
      <br></br>
      <div
        className="Content  my-4 "
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#17104e",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h4>
          Welcome to our Text Utilities application! We're excited to
          help you simplify and enhance your text editing experience. Our
          application was developed by Kaustubh Pathak, a passionate software
          developer with years of experience building innovative and
          user-friendly applications. The goal of Text Utilities is to provide a
          set of tools that help you format and manipulate your text quickly and
          easily. Our application offers a range of useful text utilities,
          including: Text case converter: Convert text to upper case, lower
          case, sentence case, and more Text counter: Count the number of words,
          characters, sentences.
          Our team is dedicated to providing you with the best possible text
          utilities, and we're always looking for ways to improve and expand our
          application. If you have any feedback, suggestions, or feature
          requests, please don't hesitate to reach out to us. 
          
          
          Thank you for
          choosing Text Utilities!
        </h4>
        <br></br>
        <strong className="text-center"><p>Designed and Developed By Kaustubh Pathak</p></strong>
      </div>
    </div>
  );
}
