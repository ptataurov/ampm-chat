$(() => {
  const link = $('#_link')

  link.click(e => {
    e.preventDefault()

    const target = $('#_chat')

    $('html, body').animate(
      {
        scrollTop: target.offset().top - 20
      },
      400
    )
  })
})
