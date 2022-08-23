# Pendulum loader for react

A pretty pendulum effect for loading screens

## Intall

You can get it on NPM installing `react-pendulum-loader` component as a project dependency.

```shell
npm install react-pendulum-loader
```

![Screen Shot](https://raw.githubusercontent.com/karthisgk/tic-tac-toe/main/public/images/Mobile.png)

## Setup

You'll need to add `react-pendulum-loader` to your app.js or any other component where you want to use loader. So that, the `<Loader />` components will be accessible in your application.

```javascript
...
import Loader from "react-pendulum-loader";
...

function App() {

	const [ isLoading, setIsLoading ] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 10000)
	}, [])

	return (
		<div className="App">
			<Loader show={isLoading} duration="3s" backgroundDim={.3} dotColor="purple" />
		</div>
	);
}
```
## Options

- `show`: boolean - use state variable to handle visibility;
- `duration`: string - duration for pendulum animation effect;
- `backgroundDim`: number - opacity to dim the background overlay;
- `dotColor`: string - color of pendulum's dot;