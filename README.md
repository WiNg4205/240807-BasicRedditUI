# 08/08/24 - RedditUIBasic (#11)
This is a basic reddit ui with only the header with hovers and empty content for the layout.

Today I tried experimenting with flex grid. Learning grid via tailwind definitely makes things easier. I can see potential in using grid as the bare bones layout (header, sidebar, feed etc.) but other than that it is too rigid in my opinion. Most websites nowadays are super basic in their layout so flexbox will do the job fine. I tried using grid for the header buttons but that was a horrible idea because the create button and the profile button do not follow the same rules as the other buttons. It took a while to figure out how to get the buttons looking like the actual reddit format but even then, I could not figure out how to make a gap between two specific selected items (for the profile as the right most button).

I did look at some websites that use grid and they look really nice. If I make a website format that is more complex than a header and sidebar, I can definitely see the appeal. Especially news websites where one story is expanded compared the other stories. Also when content is layed out in a grid (obviously). I think it would be cool to force a griddy design for a website. I'm still new in the UI world but it does seem to be a growing trend and personally I think it looks very neat.

I also used @apply from tailwind to reuse styles. I can't see myself using this too often as the direct utility first is generally good enough. Maybe when I make a website that is large enough and has many components.

I think moving forward I will try to do use grid for at least my next few UI's for the basic layout for practise. Who knows I may actually start to prefer it after playing around with it more.
