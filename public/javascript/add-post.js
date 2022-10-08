async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post_url = document.querySelector('input[name="post-url"]').value.replaceAll(' ', '-').toLowerCase();
    const text = document.querySelector('textarea[name="text"]').value;
    const user_id = document.querySelector('input[name="user_id"]').value;


    const response = await fetch(`/api/posts`, {
      methood: 'POST',
      body: JSON.stringify({
        title,
        post_url,
        text,
        user_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }

  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);