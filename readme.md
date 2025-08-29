
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
 const newp=document.createElement("p");<br>
        newp.textContent="second element";<br>
2.2:Add content and attributes<br>
document.getElementById("container").appendChild(newp);<br>
Example:<br>
<!DOCTYPE html><br>
<html lang="en"><br>
<head><br>
    <meta charset="UTF-8"><br>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"><br>
    <title>create and insert element</title><br>
</head><br>
<body><br>
    <div id="container"><br>
        <p>first element</p><br>
    </div><br>
    <script><br>
        //create<br>
        const newp=document.createElement("p");<br>
        newp.textContent="second element";<br>
        //insert<br>
        document.getElementById("container").appendChild(newp);<br>
    </script><br>
</body><br>
</html><br>

---
3.Answer:Event bubbling and its work<br>

Event bubbling is a way that events generate through the DOM.<br>
Clicked first triggers on the target element and the bubbles up to its parent elements.<br>
Event bubbling work below example:<br>
<pre> ```html
<!DOCTYPE html><br>
<html lang="en"><br>
<head><br>
    <meta charset="UTF-8"><br>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"><br>
    <title>Bubbling</title><br>
</head><br>
<body><br>
    <div class="parent"><br>
        <button class="child">Click</button><br>
    </div><br>
    <script><br>
        document.getElementById("child").addEventListener("click",function(){<br>
            alert("button clicked");<br>
        });<br>
        document.getElementById("parent").addEventListener("click",function(){<br>
            alert("parent clicked");<br>
        });<br>
    </script><br>
</body><br>
</html> <br> 
</pre>
---
4.Answer:Event Delegation and asits useful<br>

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



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Example</title>
</head>
<body>
    <div class="card">
        <h2>Title</h2>
        <p>This is a paragraph.</p>
    </div>
</body>
</html>