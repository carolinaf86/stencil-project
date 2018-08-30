import { Component } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <div>
        <header>
          <stencil-route-link url='/'><h1>Stencil App Starter</h1></stencil-route-link>
          <stencil-route-link url='/profile/stencil'><h1>Profile Page</h1></stencil-route-link>
          <stencil-route-link url='/another-page'><h1>Another Page</h1></stencil-route-link>
          <stencil-route-link url='/one-more-page'><h1>One More Page</h1></stencil-route-link>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
              <stencil-route url='/another-page' component='another-page' />
              <stencil-route url='/one-more-page' component='one-more-page' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
