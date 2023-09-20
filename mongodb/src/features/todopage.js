



function task(obj, id) {
    return `        
    <link rel="stylesheet" href="../src/index.css">
    <div class="task" id="${id}">
        <input 
            onchange="handleCheckbox(e, ${id})" 
            class="task_checkbox" 
            type="checkbox" ${(obj.status) ? 'checked' : ''}
        >
        <div class="task_info_container">
            <input 
                onchange="handleTitleChange(e, ${id})" 
                class="task_title" 
                value="${obj.title}" 
            >
            <textarea 
                onchange="handleDescriptionChange(e, ${id})" 
                cols="10" 
                rows="5" 
                class="task_description" 
            >  ${obj.description} </textarea>
        </div>
        <div class="task_date_container">
            <input 
                onclick="handleDateChange(e, ${id})" 
                type="date" 
                class="task_date" 
                value="${obj.deadline}" 
            >
        </div>
        <button onclick="handleDelete(e, ${id})"> 🗑 </button>
    </div>`
}

exports.task = task;