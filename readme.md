
1.Answer:Difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll

1.1:getElementById <br>


#Select one element by id <br>

#A single element object<br>

1.2:getElementByClassName <br>


#Select all elements with a specific class<br>

#A live HTML Collection<br>

1.3:querySelector<br>


#Select elements using CSS selectors<br>

#Returns first match<br>

1.4:querySelectorAll<br> 


#Select elements using CSS selectors<br>

#Returns all matches<br>

---

2.Ans:Creating and insert a new element involves two steps:<br>


2.1:Create element<br>

 const newp=document.createElement("p");
 newp.textContent="second element";

2.2:Add content and attributes<br>

document.getElementById("container").appendChild(newp);

Example:<br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>create and insert element</title>
</head>
<body>
    <div id="container">
        <p>first element</p>
    </div><br>
    <script>
        //create
        const newp=document.createElement("p");
        newp.textContent="second element";
        //insert
        document.getElementById("container").appendChild(newp);
    </script>
</body>
</html>

```
---
3.Answer:Event bubbling and its work<br>

Event bubbling is a way that events generate through the DOM.<br>
Clicked first triggers on the target element and the bubbles up to its parent elements.<br>

Event bubbling work below example:<br>

```html
<!DOCTYPE html>
<html lang="en">
<head><br>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bubbling</title>
</head>
<body>
    <div class="parent">
        <button class="child">Click</button>
    </div>
    <script>
        document.getElementById("child").addEventListener("click",function(){
            alert("button clicked");
        });<br>
        document.getElementById("parent").addEventListener("click",function(){
            alert("parent clicked");
        });
    </script>
</body>
</html> 

<br>
---
4.Answer:Event Delegation and asits useful<br>

Event Delegation is a pattern in javaScript .Its attach a single event listener to a parent<br> instead of attaching separate listeners to its of its child elements.<br>

Its useful because:<br>


#One event listener instead of hundreds<br>

#important in big lists and tables.<br>

#Child elements are added/removed later no need to re-attach listener.<br>

Example :<br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Delegation</title>
</head>
<body>
    <ul id="unorder">
        <li>Ramjan</li>
        <li>Jibon</li>
        <li>Sopon</li>
    </ul>
    <script>
        const unorder=document.getElementById("unorder");
        //Event Delegation
        unorder.addEventListener("click",function(e){
            if(e.target.tagName==="LI"){
                alert(e.target.textContent+" clicked");
            }
        });
    </script>
</body>
</html>

<br>
---
5.Answer:Difference between preventDefault() and stopPropagation() methods<br>

5.1:preventDefault() methods<br>


#Prevents the default action of an element<br>

#It does not stop event bubbling<br>

#Stop a form from submitting<br>

5.2:stopPropagation() methods<br>

#Stops the event from bubbling up the DOM tree.<br>

#The event is still executed on the target element.<br>

#Most useful when donot want parent elements in event listener.<br>



