@extends('layouts.app')

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>No permission !!!</title>
</head>
<body>
	<div class="container">
		<div class="d-flex justify-content-center align-items-center"  style="height: 100vh;" >
			<div class="card" style="width: 18rem;">
			  <div class="card-body">
			    <h5 class="card-title">Hold on!!</h5>
			    <h6 class="card-subtitle mb-2 text-muted">You don't have enaugh permissions</h6>
			    <p class="card-text">Looks Like you don't have enaugh permisson to access this page</p>
			    <a href="/" class="card-link">Back to Home</a>
			  </div>
			</div>
		</div>
	</div>
</body>
</html>