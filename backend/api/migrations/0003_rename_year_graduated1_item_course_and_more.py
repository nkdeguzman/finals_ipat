# Generated by Django 5.0.6 on 2024-07-15 09:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_item_description_remove_item_name_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='item',
            old_name='year_graduated1',
            new_name='course',
        ),
        migrations.RenameField(
            model_name='item',
            old_name='year_graduated2',
            new_name='senior_high_school',
        ),
        migrations.RenameField(
            model_name='item',
            old_name='year_graduated3',
            new_name='year_and_section',
        ),
    ]