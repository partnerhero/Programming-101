```
,--.  ,--.,--------.,--------.,------.     ,------. ,------. ,-----.   ,--. ,--.,------. ,---. ,--------. ,---.
|  '--'  |'--.  .--''--.  .--'|  .--. '    |  .--. '|  .---''  .-.  '  |  | |  ||  .---''   .-''--.  .--''   .-'
|  .--.  |   |  |      |  |   |  '--' |    |  '--'.'|  `--, |  | |  |  |  | |  ||  `--, `.  `-.   |  |   `.  `-.
|  |  |  |   |  |      |  |   |  | --'     |  |\  \ |  `---.'  '-'  '-.'  '-'  '|  `---..-'    |  |  |   .-'    |
`--'  `--'   `--'      `--'   `--'         `--' '--'`------' `-----'--' `-----' `------'`-----'   `--'   `-----'
```

Module 9 - Programming 101

#### In this module

We'll learn what HTTP requests are, how are they helpful, their downsides, and how to make and receive requests.

##### So, what is HTTP?

HTTP is a protocol for distributed information systems. It is the standard for cross-system communication, and it is
used by all modern webservers to send and receive data.

For example, when you log in to Facebook, your browser (a client) sends an HTTP request to Facebook (a server) containing
your information. Then, the Facebook server responds with another HTTP request containing either a success or error response.

The flow usually goes something like this:

![diagram](https://github.com/partnerhero/node-workshop/blob/master/Module%209/assets/diagram1.png?raw=true)

##### What data can HTTP transport?

HTTP is designed to support multiple data types, including large data structures and rich media. Using HTTP, you can send
and receive:

1. Text
2. Images and videos
3. Complex data structures
4. Web pages (HTML)

##### What tools will we use to learn HTTP?

1. Axios - an easy-to-use Node-based HTTP client designed to work with ES6
2. A dummy Rest API
