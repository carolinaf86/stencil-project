import {Component} from "@stencil/core";

@Component({
  tag: 'another-page'
})
export class AnotherPage {

  render() {
    return (
      <div class='app-home'>
        <p>
          Choose your name:
        </p>

        <stencil-route-link url='/profile/jim'>
          <button>
            Jim
          </button>
        </stencil-route-link>

        <stencil-route-link url='/profile/tim'>
          <button>
            Tim
          </button>
        </stencil-route-link>
      </div>
    );
  }

}
