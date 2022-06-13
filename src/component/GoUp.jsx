import { useEffect, useState } from 'react'
export default function GoUp() {
    const go = () => {

        const select = (el, all = false) => {
            el = el.trim()
            if (all) {
                return [...document.querySelectorAll(el)]
            } else {
                return document.querySelector(el)
            }
        }

        const onscroll = (el, listener) => {
            el.addEventListener('scroll', listener)
        }

        let backtotop = select('.back-to-top')
        if (backtotop) {
            const toggleBacktotop = () => {
                if (window.scrollY > 100) {
                    backtotop.classList.add('active')
                } else {
                    backtotop.classList.remove('active')
                }
            }
            window.addEventListener('load', toggleBacktotop)
            onscroll(document, toggleBacktotop)
        }
    }

    useEffect(() => {
        go();
    }, [])

    return (
        <a href="#" id="back-to-top" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

    )
}