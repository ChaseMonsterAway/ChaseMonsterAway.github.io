document.addEventListener('DOMContentLoaded', function () {
  const toggles = document.querySelectorAll('.tree-toggle');

  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      const parentItem = toggle.closest('.tree-item');
      const isOpen = parentItem.classList.contains('open');

      if (isOpen) {
        parentItem.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        parentItem.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // 自动展开当前页面所在路径
  const activeLink = document.querySelector('.tree-link.active');
  if (activeLink) {
    let parent = activeLink.closest('.tree-item');
    while (parent) {
      const parentLi = parent.closest('.tree-children');
      if (!parentLi) break;
      const ancestorItem = parentLi.closest('.tree-item');
      if (!ancestorItem) break;
      ancestorItem.classList.add('open');
      const btn = ancestorItem.querySelector(':scope > .tree-toggle');
      if (btn) btn.setAttribute('aria-expanded', 'true');
      parent = ancestorItem;
    }
  }
});
