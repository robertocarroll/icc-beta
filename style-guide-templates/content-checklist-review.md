---
layout: style
title: Content reviewers checklist 
---
# Content reviewers checklist 
Use this guide to maintain the quality, consistency and accessibility of content submitted by content experts.  

## Big questions 
- What is the specific thing a user is trying to do on this page?
- Have we helped him or her to achieve it quickly and easily?
- What is our a measure of success? 
- How are we going to monitor it? 

## Understandable and findable 

### HTML metadata
Headings, paragraphs, lists and anchors are the fundamental building blocks of any page on the web. Use them correctly: see [the ICC Beta pattern primer](../design-guide/) for more information on how to mark up particular elements. 

**Here's a quick list of the most common elements**
 
- Headings: ```<h1>, <h2>, <h3>, <h4>, <h5>```
- Paragraph: ```<p>```
- Links: ```<a href="http://icc-cpi.int/">International Criminal - Court</a>```
- Lists: ```<ul>, <ol>, <li>```
- Images: ```<img src="myimage.jpg" alt="Describe your image here" />```
- Strong emphasis and emphasis: ```<strong>, <em>```

### Title (metadata)
- The title appears in the title bar of a browser and is intended to be readable by users.
- Internal and external search engines use the title to index the contents of a page and determine its relevance.
- Title is shown in search results. Users often decide whether to click on a particular result based on the title.   
- Every page must have a unique title which is less than 70 characters. 	 
- Don’t use punctuation in a title unless it’s a question.

### Description (metadata)
- Internal and external search engines use the description to index the contents of a page and determine its relevance.
- Every page must have a description.
- Make it an accurate, appealing summary of the contents of a particular page. 
- Do not exceed 30 words.

### Subheadings and paragraphs 
- Break pages in to smaller, more specific sections. 
- This approach avoids "walls of text", provides users with different ways into your content and makes it easier to scan.
- Clear and concise subheadings help to guide users. Keep the subheadings under 70 characters.
- Each section needs to be 250 words or less if possible.   

### Style and tone
- Is the content style and tone appropriate for a particular type of user? 
- Is the main point in the first couple of sentences? Put the information the user really wants at the top.  
- Is it interesting? 
- Have you used the [word blacklist bookmarklet](../jargone) to check for banned words? 
- Are there any typos or grammatical errors?    
- Does the content follow the [style points](style-points.html)?

### Related content
- Only include genuinely related links. 
- If you cannot think of any, don't use them. 
- Make the link descriptions as specific and active as possible. 
- Help users by highlighting information that might not be obvious. 

## Accessible 
- We are aiming for Level AA of the [Web Content Accessibility Guidelines (WCAG) 2.0](http://www.w3.org/TR/WCAG/).
- Prefer HTML over PDFs unless there is no other option.
 
### Links
- Make the link descriptive – explaining what the link offers - preferably matching the title of the document you are linking to and making sense when read out of context. 
- Don’t use "More", "Further Information", "Visit", "Watch Now", "Download" or "Click Here"  for links. 
- Don't use title attributes. Use the link text. 

### Images 
- Provide text equivalents for non-text elements, e.g. images, audio and video. 
- ```<img>``` tags must have an alt attribute which is concise, meaningful (works without seeing the image) and useful (conveys the editorial intent of the image).
- Don't put text in an image.  
 
### Forms 
- Form labels are very important because a visually-impaired person using a screen-reader needs them to understand the intention of a particular element.
- See this [guide to creating accessible forms](http://studentaffairs.stanford.edu/soap/tips/forms) by Stanford University for more information. 

**Example**<br>
The label "Get email updates" is used to associate the relevant text label with its form element, so the intention of the input box is clear to users with screen readers.  
 
    <form>
    <label for="footer-email">Get email updates</label>
    <input title="Email Signup Text Box" id="footer-email" type="text" placeholder="Email Address" />
    </form>
 

### Print 
- If it is an important page, check how it prints. 
- Do we need to provide an alternative format for printing? 


<hr>Congratulations. You've reached the end of this document. 