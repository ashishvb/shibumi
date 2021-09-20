# Shibumui - (Work In Progress)

An ecommerce react native component library built with native base, the project follows CDD pattern with the help of storybook for react native

Components Developed

- Ratings Section
- Review Section
- Categories Section
- Banner Section

To use this package in your project

```
yarn add shibumi
```

To run this package locally

1.  We assume that you have a running android emulator or real device with android studio already running on your machine.

2.  Clone the project and run
    ```
    yarn
    ```
3.  Replace the host IP address with your machine's local IP address in storybook/index.js line no 21
    ```
    host: '192.16x.x.xxx'
    ```
4.  Run Story Book

    ```
    yarn story book -h 192.16x.x.xxx
    ```

5.  Start the metro Server && run the react native on the device android or IOS
    ```
    yarn start
    yarn android or ios
    ```
6.  Voila you now have a working React native Storybook Development Environment.

Please add the correct IP address in Step 3 & Step 4, or else the components might not load properly.
