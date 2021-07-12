<% if(userSecrets.length != 0){ %>
    <hr>
      <p class="lead">Secrets you`ve shared</p>
      <form  action="/submit/delete" method="post">
        <div class="form-group">
          <select class="form-control text-center" name="secret">
            <% userSecrets.forEach(function(secret){ %>
              <option value="<%= secret %>"><%= secret %></option>
            <% }); %>
          </select>
        </div>
        <button type="submit" class="btn btn-dark">Delete Secret</button>
        |
        <a class="btn btn-outline-dark" href="/logout" role="button">Log Out</a>
      </form>
<%  } %>
