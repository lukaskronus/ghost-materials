<script>
    "use strict";
    function ghost_dropdown(options) {
       let defultOptions = {
            targetElement: ".gh-navigation-menu ul li",
            hasChildrenClasses: "menu-item-has-children",
            hasChildrenIcon: "<svg xmlns='http://www.w3.org/2000/svg' width='11' height='7' fill='currentColor' class='bi bi-caret-down' viewBox='0 0 11 7'><path d='M5.4999 6.20003L0.649902 1.35003L1.3499 0.650024L5.4999 4.80002L9.6499 0.650024L10.3499 1.35003L5.4999 6.20003Z'/></svg>",
            hasChildDetectText: "[has_child]",
            submenuUlClasses: "gh-dropdown",
            subitemDetectText: "[subitem]",
            subitemLiClasses: "subitem"
        }
        options = {
            ...defultOptions,
            ...options
        }
        // Target Element
        let targetElement = options.targetElement
        let hasChildrenClasses = options.hasChildrenClasses
        let hasChildrenIcon = options.hasChildrenIcon
        let hasChildDetectText = options.hasChildDetectText
        let submenuUlClasses = options.submenuUlClasses
        let subitemDetectText = options.subitemDetectText
        let subitemLiClasses = options.subitemLiClasses

        let navigation = document.querySelector('#gh-navigation')

        // This bit can be removed if used for themes other than Source
        if (navigation?.classList?.contains('is-dropdown-loaded')) {
          navigation.classList.remove('is-dropdown-mega')
          let menu = navigation.querySelector('nav.gh-navigation-menu')
          let ul = menu?.querySelector('ul.nav')
          let button = ul?.querySelector('button.gh-more-toggle')
          if (button) {
            ul.removeChild(button)
            button.querySelector('div.gh-dropdown')?.querySelectorAll('li').forEach(function (element, index) {
              element.parentElement.removeChild(element)
              ul.appendChild(element)
            })
          }
        }

        let parentEl = document.querySelectorAll(targetElement)
        let parentIndex = []

        parentEl.forEach(function (element, index) {
          element.parentElement.classList.add('ghost-dropdown-menu')
          if (element.textContent.indexOf(hasChildDetectText) >= 0) {
                parentIndex.push(index)
                element.innerHTML = element.innerHTML.replaceAll(hasChildDetectText, '')
                element.classList.add(hasChildrenClasses)
                element.innerHTML = element.innerHTML + hasChildrenIcon + (`<div class='${submenuUlClasses}'><ul></ul></div>`)
                element.style.opacity = '1'
            }
        })
        parentIndex.forEach(function (i) {
          let collecting = true
          parentEl.forEach(function (element, index) {
            if (index > i) {
              if (element.textContent.indexOf(subitemDetectText) < 0) {
                collecting = false
              }
              if (collecting) {
                element.innerHTML = element.innerHTML.replaceAll(subitemDetectText, '')
                element.classList.add(subitemLiClasses)
                element.parentElement.removeChild(element)
                parentEl[i].querySelector(`div.${submenuUlClasses}`).querySelector('ul').appendChild(element)
              }
            }
          })
        })
    }
    window.addEventListener("load", function() {
       ghost_dropdown();
    })

    // This bit can be removed if used for themes other than Source
    window.addEventListener('resize', function () {
        setTimeout(() => {
           ghost_dropdown();
        }, 1);
    });
</script>
