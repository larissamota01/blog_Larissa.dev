function enviar() {

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.target
    const data = new FormData(form)
    try {
      const reponse = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          accept: 'appçication/json',
        },
      })
      if (reponse.ok) {
        form.reset()
      }
    } catch (error) {
      console.log(error)
    }
  }
}