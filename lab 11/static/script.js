$.get("http://api.tvmaze.com/shows", async function (data, status) {
    let shows = data;
    // console.log(shows);
    const $ul = await $("#showList").append(
        await shows.map((show) =>
            $("<li>").append(
                $("<a>").attr("href", show._links.self.href).text(show.name)
            )
        )
    );
    $("#showList").css("display", "block");
    $("#showList").on("click", "li a", function (event) {
        event.preventDefault();
        console.log(event.target.href);
        let url = event.target.href;
        $("#showList").css("display", "none");
        $("#show").empty();
        $.get(url, async function (data, status) {
            $("#show").append(
                $("<h1>").text(data && data.name ? data.name : "N/A")
            );
            $("#show").append(
                $("<img>").attr(
                    "src",
                    data && data.image && !!data.image.medium
                        ? data.image.medium
                        : "no_image.jpeg"
                )
            );
            $("#show").append(
                `<dl><dt>language</dt>
                    <dd id='language'></dd>
                    <dt>genres</dt>
                    <dd id='genres'></dd>
                    <dt>Average Rating</dt>
                    <dd id='rating'></dd>
                    <dt>Network</dt>
                    <dd id='network'></dd>
                    <dt>Summary</dt>
                    <dd id='summary'></dd>
                </dl>`
            );
            $("#language").text(data && data.language ? data.language : "N/A");
            $("#genres").append($("<ul>").attr("id", "genreList"));
            if (data.genres.length > 0) {
                for (let i = 0; i < data.genres.length; i++) {
                    $("#genreList").append("<li>" + data.genres[i] + "</li>");
                }
            } else {
                $("#genreList").append(
                    "<li>No genres found for this show</li>"
                );
            }

            $("#rating").text(
                data && data.rating && data.rating.average
                    ? data.rating.average
                    : "N/A"
            );
            $("#network").text(
                data && data.network && data.network.name
                    ? data.network.name
                    : "N/A"
            );
            $("#summary").html(data && data.summary ? data.summary : "N/A");
        });
        $("#show").css("display", "block");
        $("#homeLink").css("display", "block");
    });
});

$("#searchForm").submit(function (event) {
    event.preventDefault();
    $("#show").css("display", "none");
    let term = $("#search_term").val().trim();
    if (!term) {
        $("#error").text("please fill the values");
        $("#error").css("display", "block");
    } else {
        $("#error").css("display", "none");
        $("#showList").empty();
        $("#showList").css("display", "none");
        $.get(
            " http://api.tvmaze.com/search/shows?q=" + term,
            async function (data, status) {
                let shows = await data.map((show) => {
                    return show.show;
                });
                // console.log(shows);
                const $ul = await $("#showList").append(
                    await shows.map((show) =>
                        $("<li>").append(
                            $("<a>")
                                .attr("href", show._links.self.href)
                                .text(show.name)
                        )
                    )
                );
                $("#homeLink").css("display", "block");
                $("#showList").css("display", "block");
            }
        );
    }
});

$("#homeLink").click(function (event) {
    location.reload();
});
