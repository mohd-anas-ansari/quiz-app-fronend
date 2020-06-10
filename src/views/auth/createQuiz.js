import React from "react";
class CreateQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
    };
  }
  render() {
    return (
      <>
        <form className="container my-3">
          <h2 className="font-weight-bold my-3"> Create Quiz</h2>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="title">Title</label>
              <input
                onChange={(e) => this.handleInput(e)}
                type="text"
                name="title"
                className="form-control"
                id="title"
                value={this.state.title}
                required
              />
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="category">Question</label>
              <input
                onChange={(e) => this.handleInput(e)}
                type="text"
                name="question"
                className="form-control"
                id="question"
                value={this.state.question}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="subcategory">Option1</label>
              <input
                onChange={(e) => this.handleInput(e)}
                type="text"
                name="option1"
                className="form-control"
                id="subcategory"
                value={this.state.option1}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="brand">Option2</label>
              <input
                onChange={(e) => this.handleInput(e)}
                type="text"
                name="option2"
                className="form-control"
                id="option2"
                value={this.state.option2}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="seller">Option3</label>
              <input
                onChange={(e) => this.handleInput(e)}
                type="text"
                name="option3"
                className="form-control"
                id="option3"
                value={this.state.option3}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="option4">Option4</label>
              <input
                onChange={(e) => this.handleInput(e)}
                type="number"
                name="option4"
                className="form-control"
                id="option4"
                value={this.state.option4}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="answer1">Answer1</label>
              <input
                onChange={(e) => this.handleInput(e)}
                type="text"
                name="answer1"
                className="form-control"
                id="answer1"
                value={this.state.answer1}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="answer2">Answer2</label>
              <input
                onChange={(e) => this.handleInput(e)}
                type="text"
                name="answer2"
                className="form-control"
                id="answer2"
                value={this.state.answer2}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="answer3">Answer3</label>
              <input
                onChange={(e) => this.handleInput(e)}
                type="text"
                name="answer3"
                className="form-control"
                id="answer3"
                value={this.state.answer3}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="answer4">Answer4</label>
              <input
                onChange={(e) => this.handleInput(e)}
                type="text"
                name="answer4"
                className="form-control"
                id="answer4"
                value={this.state.answer4}
                required
              />
            </div>
          </div>

          <div className="form-group"></div>
          <button
            onClick={(e) => this.handleSubmit(e)}
            type="primary"
            className="btn btn-primary">
            Create
          </button>
        </form>
      </>
    );
  }
}

export default CreateQuiz;
