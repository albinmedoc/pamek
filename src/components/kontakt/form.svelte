<script>
    import {
        Form,
        FormRow,
        InputContainer,
        autoresize,
    } from 'svelte-responsive-form';

    import { getNotificationsContext } from 'svelte-notifications';
    const { addNotification } = getNotificationsContext();

    let name,
        email,
        tel,
        subject,
        message = undefined;

    function handleSubmit() {
        fetch('/kontakt/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                tel,
                subject,
                message,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                addNotification({
                    text: 'Tack för ditt meddelande!',
                    position: 'bottom-right',
                    type: 'success',
                });
                // Reset form
                name = email = tel = subject = message = undefined;
            })
            .catch((error) => {
                addNotification({
                    text: 'Någonting gick fel, vänligen försök igen.',
                    position: 'bottom-right',
                    type: 'danger',
                });
            });
    }
</script>

<style>
    div :global(form) {
        width: calc(100% - 70px);
        padding: 25px 35px;
        background-color: #e3e3e3;
        max-width: 300px;
    }
</style>

<div>
    <Form on:submit={handleSubmit}>
        <FormRow>
            <InputContainer label="Ditt namn">
                <input bind:value={name} type="text" placeholder=" " required />
            </InputContainer>
        </FormRow>
        <FormRow>
            <InputContainer label="Din e-post">
                <input
                    bind:value={email}
                    type="email"
                    placeholder=" "
                    required />
            </InputContainer>
        </FormRow>
        <FormRow>
            <InputContainer label="Ditt telefonnummer">
                <input bind:value={tel} type="tel" placeholder=" " required />
            </InputContainer>
        </FormRow>
        <FormRow>
            <InputContainer label="Ämne">
                <input
                    bind:value={subject}
                    type="text"
                    placeholder=" "
                    required />
            </InputContainer>
        </FormRow>
        <FormRow>
            <InputContainer label="Meddelande">
                <textarea
                    bind:value={message}
                    use:autoresize
                    placeholder=" "
                    required />
            </InputContainer>
        </FormRow>
        <FormRow>
            <InputContainer>
                <input type="submit" value="Skicka" />
            </InputContainer>
        </FormRow>
    </Form>
</div>
