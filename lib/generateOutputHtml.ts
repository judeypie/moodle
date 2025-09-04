import { Tab } from "@/types";

export function generateOutputHtml(tabs: Tab[]): string {
  const createTabButtons = () => {
    return tabs
      .map(
        (tab, index) =>
          `<button 
        onclick="openTab(event, 'tab-content-${tab.id}')"
        style="padding: 10px; border: 1px solid #ccc; background-color: ${
          index === 0 ? "#ddd" : "#f1f1f1"
        };"
      >
        ${tab.title}
      </button>`
      )
      .join("");
  };

  const createTabContents = () => {
    return tabs
      .map(
        (tab, index) =>
          `<div id ="tab-content-${tab.id}"
    style="display:  ${
      index === 0 ? "block" : "none"
    }; padding: 20px; border: 1px solid #ccc; border-top: none; white-space: pre-wrap"
      >
        <p>${tab.data.replace(/\n/g, "<br>")}</p>
      </div>`
      )
      .join("");
  };

  return `
<!DOCTYPE html>
<html>
<head>
<title>Generated Tabs</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h2>Tabs Example</h2>

<div>
  ${createTabButtons()}
</div>

${createTabContents()}

<script>
  function openTab(event, tabContentId) {
    // Get all content elements and hide them
    var i, tabcontent, tablinks;
    tabcontent = document.querySelectorAll('[id^="tab-content-"]');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all button elements and reset their background color
    tablinks = document.getElementsByTagName("button");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "#f1f1f1";
    }

    // Show the current tab, and add an "active" color to the button that opened the tab
    document.getElementById(tabContentId).style.display = "block";
    event.currentTarget.style.backgroundColor = "#ddd";
  }
</script>

</body>
</html>
  `;
}
