
$(document).ready(function() {
    $('button').click(function() {
        let output = ''
        $('#display').html("");
        $('#pattern').val().split('\n').forEach(str => {
            output += '<tr>';
            str.split("").forEach(elem => {
                if (elem=="0") output += `<th class="black">__</th>`;
                else output += `<th class="white">__</th>`;
            });
            output += '</tr>';
        });
        $('#display').append(output);
    });
});

