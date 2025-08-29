
1.Answer:Difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll

1.1:getElementById 
###Select one element by id
###A single element object
1.2:getElementByClassName 
>>Select all elements with a specific class
>>A live HTML Collection
1.3:querySelector
>>Select elements using CSS selectors
>>Returns first match
1.4:querySelectorAll 
>>Select elements using CSS selectors
>>Returns all matches
---

2.Ans:Creating and insert a new element involves two steps:
2.1:Create element
 const newp=document.createElement("p");
        newp.textContent="second element";
2.2:Add content and attributes
document.getElementById("container").appendChild(newp);
Example:
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
    </div>
    <script>
        //create
        const newp=document.createElement("p");
        newp.textContent="second element";
        //insert
        document.getElementById("container").appendChild(newp);
    </script>
</body>
</html>

---
3.Answer:Event bubbling and its work

Event bubbling is a way that events generate through the DOM.
Clicked first triggers on the target element and the bubbles up to its parent elements.
Event bubbling work below example:
<!DOCTYPE html>
<html lang="en">
<head>
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
        });
        document.getElementById("parent").addEventListener("click",function(){
            alert("parent clicked");
        });
    </script>
</body>
</html>  

---
4.Answer:Event Delegation and asits useful

Event Delegation is a pattern in javaScript .Its attach a single event listener to a parent instead of attaching separate listeners to its of its child elements.

Its useful because:
>>One event listener instead of hundreds
>>important in big lists and tables.
>>Child elements are added/removed later no need to re-attach listener.

Example :
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

---
5.Answer:Difference between preventDefault() and stopPropagation() methods

5.1:preventDefault() methods
>>Prevents the default action of an element
>>It does not stop event bubbling
>>Stop a form from submitting

5.2:stopPropagation() methods
>>Stops the event from bubbling up the DOM tree.
>>The event is still executed on the target element.
>>Most useful when donot want parent elements in event listener.
