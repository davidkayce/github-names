# Calender

![Calendar](https://github.com/davidkayce/github-names/blob/main/github-names.png)

This project is built with React, Vite and Vitest. It fetches infromation from github on organisations and their members and shows them

### Requirements
- Retrieve the data from the following endpoint https://api.github.com/organizations?per_page=6&since=4242 …
- And display them so it looks the same as on the Figma wireframes.
- For each org there are 3 cases and corresponding UI variations:
0 public member
1 public member
x amount of public members

## Instructions:

Run the following command to start the app:

```bash
npm install
npm run dev

```

## Walkthrough and considerations:

In the code architecture, I considered arranging the data flow in a way that makes it easier to understand. I made use of the HTML% spec details...summary tag for the accordion. This is to enable full accessibility for the user. I also made use of the react-query libraries to fetch the data from the API.

Styling was done using scss as well as it was mor egonomic. I made use of the grid system to make the app look more clean and alllow responsivity


### Considerations and further work

This a very interesting project. It was a lot of work to get everything to work together, but it was a lot of fun to make it work. That being said, it's not a perfect solution. 

Optimisations/changes would include the following:

1. Complete the tests and make sure they pass
2. To enable the API receive keys for fetching the github organizations. Such as `since` and `per_page`. Thiis cann be done by adding those params to the useQuery key in `App.tsx`. The query would then look something like this: `useQuery(['organizations', since, per_page], () => fetchGithubOrganizations(since, per_page))`. The `since` and `per_page` would be also stored  using useState in the App componenet so that the user can update them.
