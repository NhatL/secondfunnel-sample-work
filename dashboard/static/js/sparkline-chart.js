var Script = function () {
    "use strict";
    $(".sparkline").each(function () {
        var $data = $(this).data();

        $data.valueSpots = {'0:': $data.spotColor};

        $(this).sparkline($data.data || "html", $data,
            {
                tooltipFormat: '<span style="display:block; padding:0px 10px 12px 0px;">' +
                    '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)</span>'
            });


    });

//sparkline chart

    $("#barchart").sparkline([5, 3, 6, 7, 5, 6, 4, 2, 3, 4, 6, 8, 9, 10, 8, 6, 5, 7, 6, 5, 4, 7, 4], {
        type: 'bar',
        height: '65',
        barWidth: 8,
        barSpacing: 5,
        barColor: '#fff'

    });


    $("#linechart").sparkline([1, 5, 3, 7, 9, 3, 6, 4, 7, 9, 7, 6, 2], {
        type: 'line',
        width: '300',
        height: '75',
        fillColor: '',
        lineColor: '#fff',
        lineWidth: 2,
        spotColor: '#fff',
        minSpotColor: '#fff',
        maxSpotColor: '#fff',
        highlightSpotColor: '#fff',
        highlightLineColor: '#ffffff',
        spotRadius: 4


    });

    $("#pie-chart").sparkline([2, 1, 1, 1], {
        type: 'pie',
        width: '100',
        height: '100',
        borderColor: '#00bf00',
        sliceColors: ['#41CAC0', '#A8D76F', '#F8D347', '#EF6F66']
    });

    //work progress bar

    $("#work-progress1").sparkline([5, 6, 7, 5, 3, 6, 4, 3, 2, 5, 8, 4, 7, 5, 3, 9, 5, 8], {
        type: 'bar',
        height: '25',
        barWidth: 5,
        barSpacing: 2,
        barColor: '#458bb3'
    });

    $("#work-progress2").sparkline([3, 2, 5, 8, 4, 7, 5, 8, 4, 7, 5, 3, 9, 5, 8, 7, 5, 3, 6], {
        type: 'bar',
        height: '25',
        barWidth: 5,
        barSpacing: 2,
        barColor: '#e64646'
    });

    $("#work-progress3").sparkline([1, 6, 9, 3, 4, 8, 5], {
        type: 'bar',
        height: '25',
        barWidth: 5,
        barSpacing: 2,
        barColor: '#45b3aa'
    });

    $("#work-progress4").sparkline([9, 4, 9, 6, 7, 4, 3], {
        type: 'bar',
        height: '25',
        barWidth: 5,
        barSpacing: 2,
        barColor: '#69889c'
    });

    $("#work-progress5").sparkline([6, 8, 5, 7, 6, 8, 3], {
        type: 'bar',
        height: '25',
        barWidth: 5,
        barSpacing: 2,
        barColor: '#363b3f'
    });

    $("#pie-chart2").sparkline([2, 1, 1, 1], {
        type: 'pie',
        width: '250',
        height: '125',
        sliceColors: ['#41CAC0', '#A8D76F', '#F8D347', '#EF6F66']
    });

}();