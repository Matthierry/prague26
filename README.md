# Prague 26

A mobile-first field guide for 23–26 October 2026. Static HTML, CSS and JavaScript, designed for GitHub Pages. No build step or API key.

## Features

- Four-day agenda in Prague local time, with the supplied fixed plans.
- 23 suggested venues plus the accommodation, all linked to the supplied Google Maps profiles.
- Search, category filters, sorting, contextual suggestions and one-tap Google Maps walking directions.
- Choose accommodation, another venue or your phone's current position as the origin. Card distances use straight-line coordinates and are labelled approximate. Google Maps computes actual walking routes.
- Named ballots for Aaron, Harry, Matt and Tom. Picks are kept in local storage. Sharing a ballot URL imports the sender's latest picks into another phone; there is no live shared database or authentication.
- Installable web app with cached core pages for intermittent connectivity. Maps, directions and web fonts need a connection.

## Local development

Run `python3 -m http.server 8000` and open http://localhost:8000/prague26/ if serving from the parent directory, or http://localhost:8000/ if serving from this directory. Geolocation requires HTTPS or localhost.

## Publishing

In GitHub repository Settings → Pages, choose **Deploy from a branch**, `main`, `/ (root)`. The result is https://matthierry.github.io/prague26/ . No GitHub Actions workflow is required.

## Data and maintenance

Edit `places.js` to update venue notes, links, coordinates or agenda times. The supplied short Maps URLs were resolved on 1 October 2026; check schedules, venue hours and reservations shortly before travel. All agenda times are Prague local. The Saturday Slavia 18:00 fixture was checked against the club's official match list on 1 October 2026. Sunday Sparta 15:00 and other plans follow the supplied agenda.
