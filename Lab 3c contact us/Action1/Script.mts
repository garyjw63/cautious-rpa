SystemUtil.CloseProcessByName "iexplore.exe"
SystemUtil.Run "iexplore.exe", "http://advantageonlineshopping.com"
For sendFeedback = 1 To 4 Step 1
	
	Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link")_;_script infofile_;_ZIP::ssf25.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping").WebList("categoryListboxContactUs").Select "#" &sendFeedback @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebList("categoryListboxContactUs")_;_script infofile_;_ZIP::ssf26.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping").WebList("productListboxContactUs").Select "#" &sendFeedback @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebList("productListboxContactUs")_;_script infofile_;_ZIP::ssf27.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("emailContactUs").Set "3clab@3clab.com" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("emailContactUs")_;_script infofile_;_ZIP::ssf28.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("subjectTextareaContactUs").Set "Here goes" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("subjectTextareaContactUs")_;_script infofile_;_ZIP::ssf29.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("send_btnundefined").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("send btnundefined")_;_script infofile_;_ZIP::ssf30.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("WebElement").Check CheckPoint("Thank you for contacting Advantage support.") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("WebElement")_;_script infofile_;_ZIP::ssf31.xml_;_
Next
SystemUtil.CloseProcessByName "iexplore.exe"
