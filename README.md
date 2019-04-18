# Motif Web Admin Module Template Project

This is the project starter for a custom MOTIF Web Admin Module.

## Installation

<strong>1</strong>. Clone this repository

```terminal
git clone  https://github.com/github-vipera/motif-web-admin-module-template-project.git MyCustomModule
```

<strong>2</strong>. Install dependencies

```terminal
cd MyCustomModule
npm install
```

<strong>3</strong>. Change Proxy configuration

Open ```proxy.conf.json``` file and change the URL to point to your MOTIF Server instance:

```json
{
    "/rest": {
      "target": "http://my.motif.instance:8080/",
      "secure": false,
      "logLevel": "debug"
    },
    "/oauth2": {
      "target": "http://my.motif.instance:8080/",
      "secure": false,
      "logLevel": "debug"
    }
  }
```

<strong>4</strong>. Build the module

```terminal
ng build custom-web-admin-module
```

<strong>5</strong>. Run

```terminal
ng serve
```

Then open http://localhost:42000




