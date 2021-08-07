---
sidebar_position: 1
---

# Unable to Get the Image

Once you see the alert "Unable to Get the Image" and the image in preview doesn't show up, here is the reasons and how to fix it.

## Check if images can be opened
The server hosts your images may be down for a while, copy the image url from `Mint` or the CSV file and open it with Private Mode to check it and wait until the server is recovered. If you can open it in Normal Mode but not in Private Mode, that mean your images are sensitive and we cannot access them. It this case, download the images and upload them to another image hosting.

## Check if images hosting allows CORS
If your image is hosted on other services who isn't considered as image hosting service such as social media, blog, and online news website. They may not allow the *Cross Origin Resource Sharing*. Browsers are default to block the requests because malicioous websites can use this to retrieve private data.
