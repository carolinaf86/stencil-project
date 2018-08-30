import {Component, Prop, State} from "@stencil/core";
import {RouterHistory} from "@stencil/router";

@Component({
  tag: 'one-more-page'
})
export class OneMorePage {

  @Prop() history: RouterHistory;
  @State() name: string;

  handleSubmit(e) {
    e.preventDefault();
    // Redirect to profile page
    if (this.name) {
      const path = '/profile/' + this.name;
      this.history.push(path);
    }
  }

  nameChanged(e) {

    this.name = e.target.value;
  }

  render() {
    return (
      <div class='app-home'>

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Name:
            <input type="text" value={this.name} onInput={(e) => this.nameChanged(e)}/>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

}
