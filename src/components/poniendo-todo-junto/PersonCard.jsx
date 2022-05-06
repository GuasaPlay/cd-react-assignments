import { Component } from "react";

class PersonCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: props.age,
    };
  }

  render() {
    const { firstName, lastName, hairColor } = this.props;
    return (
      <div className="flex w-full justify-center">
        <div className="w-1/3 rounded-lg border-2 border-slate-500 p-3">
          <section>
            <h3 className="text-lg font-bold text-slate-700">
              {lastName}, {firstName}
            </h3>
            <p className="text-sm font-medium text-slate-700">
              Age: {this.state.age}
            </p>
            <p className="text-sm font-medium text-slate-700">
              Hair Color: {hairColor}
            </p>
          </section>
          <section className="mt-3 flex w-full justify-center">
            <button
              onClick={() => this.setState({ age: this.state.age + 1 })}
              className="rounded-md bg-gray-200 py-2 px-4 text-sm text-slate-700 hover:bg-gray-300"
            >
              Birthday button for {firstName} {lastName}
            </button>
          </section>
        </div>
      </div>
    );
  }
}

export default PersonCard;
