# Script build the widget approach


This is a most recent approach, the idea is one widget is a web component all defined in one js file. The component define a
clear lifecycle and interactions.

## Install
```
yarn
```

## Run

```
./node_modules/.bin/webpack serve
```

### Good parts

- Avoid collision due to the shadow doom
- Clear interaction and lifecycle


### Bad parts
- Support on recent browsers
- Access to the environment
- Developers can't control loading process
- All in one js file

