export default class ImagesPreload {

    preloadImages(imgSrc, args) {
        if (!args) {
            args = {};
        }
        // args.printErrors = args.printErrors ? args.printErrors : false;
        // args.timeout = args.timeout ? args.timeout : false;

        return new Promise((resolve, reject) => {
            var loaded = 0;
            var length = imgSrc.length;

            var response = {
                success: false,
                errors: false,
                timeout: false
            }

            if (args.timeout) {
                setTimeout(function(){ response.timeout = true; resolve(response) }, args.timeout);
            }

            for (var link of imgSrc) {
                const currentImg = new Image();

                currentImg.onload = function () {
                    loaded++
                    if (loaded >= length) {
                        response.success = true;
                        resolve(response);
                    }
                };
                currentImg.onerror = function (e) {
                    loaded++
                    if (args.printErrors) {
                        console.log(e);
                    }
                    if (loaded >= length) {
                        response.errors = true;
                        resolve(response);
                    }
                };

                currentImg.src = link;
            }
        });
    }
}