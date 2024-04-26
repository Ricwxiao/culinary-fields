# Pacific Roots

This is team Culinary Fields, where we are focusing on **“How might we help people in Seattle discover Asian produce grown in Puget Sound to support local Asian farmers and better connect with culture through food?”**

### Important Links
- [Presentation Deck]()
- [Final Product](https://culinaryfields.web.app/) 
- [Github Repo](https://github.com/Ricwxiao/culinary-fields/tree/main)
- [Email Contact](mailto:rob.bonglamphone@gmail.com)

### Team Members:
- Robert Bonglamphone - [Linkedin](https://www.linkedin.com/in/robbong/)
- Ryan Le - [Linkedin](https://www.linkedin.com/in/ryan-v-le/)
- Wayne Wang - [Linkedin](https://www.linkedin.com/in/-wayne/)
- Taiga Hijikata - [Linkedin](https://www.linkedin.com/in/taigahijikata/)
- Chaowei Xiao - [Linkedin](https://www.linkedin.com/in/chaowei-xiao-ux-web/)

## Our Mission and Goals:
At **Pacific Roots**, our vision is to bridge the gap between local Asian farmers and home chefs, particularly in the Seattle area, who are eager to explore and incorporate authentic Asian ingredients into their culinary practices. Amidst the challenges posed by disrupted supply chains post-COVID-19, our platform aims to enhance visibility for local farms, facilitate easier access to high-quality, culturally rich ingredients, and foster a deeper understanding and appreciation of Asian culinary traditions among the community.

We want to:
- **Help** people who struggle to make time and vehicles to visit multiple shops at once;
- **Discover** local farmers by providing information on the specialty produce from each farm, along with corresponding recipes;
- **Inform** various types of produce and ingredients;
- **Enable** quickly access to sources of their produce and see the quality/freshness;
- **Provide** authentic cuisine ​​ideas, recipes, storage tips, etc.

## Our Core Concepts:
- **Community Building through Food:** We want to build a sense of Community through Food. We have a page for farmers and consumers to share produce-related recipes, by that we aim to foster community and informal communication on the platform for both sides.

- **Asian Produce:** We aim to concentrate our efforts specifically on Asian produce. According to our research, we found that only about 1% of the state’s farm producers are Asian and only a small fraction of them grow vegetables.

- **Discover Fresh Produce and New Farmers:** Most importantly, we aim to help and motivate people to discover Fresh Produce and New Farmers. We use a kind of Top-down process here, where user-generated content (recipe) motivates people to explore more on the specialty produce.

## Current Features:
- **Feature 1: Discover Local Farms & Learn**
  - Weekly Spotlight Carousel of Farmers
  - Starring a local Asian farmer’s story as a blog post and links to their social media and official website.

- **Feature 2: Finding Recipes Using Local Asian Produce**
  - List view of the produces
  - Search
  - Filter

- **Feature 3: Finding Local Produce**
  - Search & Filter
  - List of Farms

## Development Instructions:
### Built with:
- **React.js:** A JavaScript library for building user interfaces.
- **HTML/CSS/JavaScript:** Core technologies for building web pages.
- **Firebase:** A comprehensive app development platform used for its real-time database, authentication, and hosting capabilities.

### Enviroment Setup  
1. **Install all npm packages**

    Navigate to the project folder and run:

    ```bash
    npm install
    ```

2. **Start the Development Server**

    To run the application, type the following command:

    ```bash
    npm start
    ```

    Stop the server with `Ctrl + C`.

3. **If you encounter any issues, try executing the following commands:**
    
    ```bash
    rm -rf node_modules
    npm install
    ```


## Continuing the Project:
### User Research
Conduct user research and explore the idea that customers are looking for convenient pick-up locations to collect all their produce and ingredients all at once. 

### Proposed Features (prioritized from top to bottom)
**Search Engine Optimization**
- Run a usability test to gauge how users are interacting with the search bar and collect feedback on how they can improve the experience, so they can easily find farms and attain relevant results. 
- Questions include:
 - What pieces of info do they find most relevant?
 - What filters can help with their search?
 - Obtaining a user’s IP address to approximate location to populate top search results with Asian farms and stores that are in close proximity
 - Creating filters based on distance, certified organic or not, type of vegetable grown

**Onboarding**  
Profile
- Mainly for farmers to create and share their recipes that use their ingredients. Hopefully, it provides a more authentic experience for users since the recipes are coming from the farmers and is another way to get to know them.

User Authentication
- For users to personalize their website experience by either setting up a password or PIN number. We would want users to be able to generate their own profile and add more personal information features such as their preference in Asian products, groceries, and farmers in the Puget Sound. 

**Space and Time Visualization**
- The mission of this project is to curate the Asian farms and retailers in the Puget Sound Area (arguably expandable to other metropolitan areas as well) to users who are interested in Asian cuisines. A solution is to embed a map in which users can freely browse farms and retailers in the area, just like how they use the list of search results as in our current iteration.  
- For users who had pre-ordered produces that are grown on-demand, the map view can provide them information about what stage the produce is in its growth, which location the produce is grown in, and how soon the produce is expected to mature. By animated graphics representing the produces scattered on the map.



