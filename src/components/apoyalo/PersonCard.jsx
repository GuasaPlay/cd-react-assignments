import { Component } from "react";

class PersonCard extends Component {
  render() {
    const { firstName, lastName, age, hairColor } = this.props;
    return (
      <div className="flex w-full justify-center">
        <div className="w-1/3 rounded-lg border-2 border-slate-500 p-3">
          <section>
            <h3 className="text-lg font-bold text-slate-700">
              {lastName}, {firstName}
            </h3>
            <p className="text-sm font-medium text-slate-700">Age: {age}</p>
            <p className="text-sm font-medium text-slate-700">
              Hair Color: {hairColor}
            </p>
          </section>
        </div>
      </div>
    );
  }
}

export default PersonCard;
