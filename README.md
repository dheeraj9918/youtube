#  YouTub Front Page
![Screenshot 2024-04-18 172248](https://github.com/dheeraj9918/youtube/assets/136745393/63871799-d2d0-4cba-a2eb-9a3885d49ec6)

# YouTub Video Playing Page and Nested Comment 
![Screenshot 2024-04-18 172340](https://github.com/dheeraj9918/youtube/assets/136745393/6a8cbb45-bc33-4180-a02a-bfe9793b0f3f)
![Screenshot 2024-04-18 172412](https://github.com/dheeraj9918/youtube/assets/136745393/200bc2cc-46e1-46f4-b4df-908765f6e1b4)

### Debouncing

typing slow = 200ms
typing fast = 150ms

Performance:
-if Search(iphone max Pro)= 14 letter *1000(people at a time search) = 14000 (time api call)
-with Debouncing  if Search(iphone max Pro) = 3Api call * 1000(people at a time) =3000 times api call

Debouncing with 200ms
-if different between two key press is <200ms -decline the api call
-if key press is > 200ms to make the API call


(means when the key press time different between two key press is less than 200ms then the api call is decline and when the key press is greater than 200ms then the api call this concept is known is Debouncing )
