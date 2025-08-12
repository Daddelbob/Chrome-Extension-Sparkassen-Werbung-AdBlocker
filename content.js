// Target: a known section within the dom
const ROOT = ".flexbox.flexboxbase.section.is-flexbox-slider";

// reliable sign of the undesired section
const MARK = ".cbox-campaign";

function removeIfPresent() {
  // finde GENAU den Wrapper, der innen .cbox-campaign hat
  const target = [...document.querySelectorAll(ROOT)].find((el) =>
    el.querySelector(MARK)
  );

  if (target) {
    target.remove();
  }
}

// 1) try immedeatly
removeIfPresent();

// 2) try later again if content is loaded lazily
new MutationObserver(removeIfPresent).observe(document.documentElement, {
  childList: true,
  subtree: true,
});
