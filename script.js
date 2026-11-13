/* 序衡 Ordloom 官网:轻量交互(菜单 / 复制 / 滚动显现),无构建依赖 */
(function () {
  'use strict'

  // 移动端菜单
  const burger = document.getElementById('navBurger')
  const links = document.getElementById('navLinks')
  if (burger && links) {
    burger.addEventListener('click', () => {
      const open = links.classList.toggle('open')
      burger.setAttribute('aria-expanded', open ? 'true' : 'false')
    })
    links.addEventListener('click', event => {
      if (event.target.closest('a')) {
        links.classList.remove('open')
        burger.setAttribute('aria-expanded', 'false')
      }
    })
  }

  // 复制命令
  document.querySelectorAll('.copy').forEach(button => {
    button.addEventListener('click', () => {
      const text = button.dataset.copy || button.parentElement.querySelector('code')?.textContent || ''
      const done = () => {
        const previous = button.textContent
        button.textContent = '已复制 ✓'
        setTimeout(() => { button.textContent = previous }, 1600)
      }
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, done)
      else done()
    })
  })

  // 滚动显现
  const observer = 'IntersectionObserver' in window
    ? new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) { entry.target.classList.add('in'); observer.unobserve(entry.target) }
        })
      }, { threshold: 0.12 })
    : null
  document.querySelectorAll('.reveal').forEach(element => {
    observer ? observer.observe(element) : element.classList.add('in')
  })
})()
