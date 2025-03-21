<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You | Knoqlogico</title>
    <link rel="icon" type="image/png" sizes="32x32" href="img/knoq_logo.png" />
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }

        body {
            min-height: 100vh;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .success-container {
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            text-align: center;
            max-width: 600px;
            width: 90%;
            animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .success-icon {
            width: 100px;
            height: 100px;
            background: #4CAF50;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 30px;
            animation: scaleIn 0.5s ease-out;
        }

        @keyframes scaleIn {
            from {
                transform: scale(0);
            }
            to {
                transform: scale(1);
            }
        }

        .success-icon svg {
            width: 50px;
            height: 50px;
            fill: white;
        }

        h1 {
            color: #2c3e50;
            margin-bottom: 20px;
            font-size: 2.5em;
        }

        p {
            color: #666;
            line-height: 1.6;
            margin-bottom: 30px;
            font-size: 1.1em;
        }

        .buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            flex-wrap: wrap;
        }

        .btn {
            padding: 12px 30px;
            border-radius: 25px;
            text-decoration: none;
            font-weight: bold;
            transition: all 0.3s ease;
            font-size: 1em;
        }

        .btn-primary {
            background: #1f26ff;
            color: white;
            border: 2px solid #1f26ff;
        }

        .btn-primary:hover {
            background: #0000dd;
            border-color: #0000dd;
            transform: translateY(-2px);
        }

        .btn-secondary {
            background: transparent;
            color: #1f26ff;
            border: 2px solid #1f26ff;
        }

        .btn-secondary:hover {
            background: #1f26ff;
            color: white;
            transform: translateY(-2px);
        }

        @media (max-width: 480px) {
            .success-container {
                padding: 30px 20px;
            }

            h1 {
                font-size: 2em;
            }

            p {
                font-size: 1em;
            }

            .btn {
                width: 100%;
                margin-bottom: 10px;
            }
        }

        .social-links {
            margin-top: 30px;
            display: flex;
            justify-content: center;
            gap: 15px;
        }

        .social-links a {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f0f2f5;
            transition: all 0.3s ease;
        }

        .social-links a:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .social-links i {
            font-size: 20px;
        }

        .facebook { color: #1877f2; }
        .instagram { color: #e4405f; }
        .linkedin { color: #0077b5; }
        .youtube { color: #ff0000; }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <div class="success-container">
        <div class="success-icon">
            <svg viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
            </svg>
        </div>
        <h1>Thank You!</h1>
        <p>Your message has been successfully sent. We appreciate you contacting Knoqlogico. One of our team members will get back to you shortly.</p>
        <div class="buttons">
            <a href="index.html" class="btn btn-primary">Back to Home</a>
            <a href="contact.html" class="btn btn-secondary">Send Another Message</a>
        </div>
        <div class="social-links">
            <a href="https://www.facebook.com/people/Knoqlogico/100092261611303/" target="_blank" class="facebook">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/knoqlogico/" target="_blank" class="instagram">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="https://in.linkedin.com/company/knoqlogico" target="_blank" class="linkedin">
                <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.youtube.com/channel/UC80Vwexz7pbAm0CdGyla4fw" target="_blank" class="youtube">
                <i class="fab fa-youtube"></i>
            </a>
        </div>
    </div>
</body>
</html> 