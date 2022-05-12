const commentsFormHandler = async (event) => {
    event.preventDefault();
  
    const contents = document.querySelector('textarea[name="comment-text"]').value.trim();
  
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (contents) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            post_id,
            contents
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
  };

  document.querySelector('.comment-form').addEventListener('submit', commentsFormHandler);