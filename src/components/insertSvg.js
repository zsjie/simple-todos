import svgIcon from '../assets/icons.svg';

export default function insertSvg () {
    const div = document.createElement('div')
    div.innerHTML = svgIcon
    const svg = div.getElementsByTagName('svg')[0]
    svg.setAttribute('aria-hidden', true)
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    const body = document.querySelector('body')
    body.insertBefore(svg, body.firstChild)
}